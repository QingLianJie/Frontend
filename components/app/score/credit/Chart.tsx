import React, {useContext, useMemo} from 'react';
import ReactECharts from 'echarts-for-react';
import GroupContainer from "../../../common/container/Group";
import useScore from "../../../../hooks/useScore";
import {ScoresContext} from "../../../../pages/scores";

export const SUM_FROM_CHILDREN: CalcRule = {
	"key": "sum_from_children",
	"value": ["sum_from_children"],
}

export interface CalcRule {
	key: string;
	value: string[];
}

export interface TreeNode {
	name?: string;
	rule: CalcRule;
	children?: TreeNode[];
	value?: number;
	indexList?: number[];
}

interface ChartProps {
    data: TreeNode
}

const CreditChart = ({data}: ChartProps) => {
    const {scores, isLoading, isError} = useScore()
    const context = useContext(ScoresContext)

    const handleChartClick = (event: Object) => {
        console.log(context.calcMode)
        if (context.calcMode) {
            context.setCheckList(event.data.indexList)
        }
    }

    return useMemo(()=>{
        data = JSON.parse(JSON.stringify(data));

        function processData(node: TreeNode){
            let childrenCredits = 0;
            let childrenIndexList: number[] = [];
            if (node.children != undefined) {
                for (let child of node.children) {
                    processData(child)
                    childrenCredits += (child.value === undefined ?
                        0 :
                        child.value);
                    childrenIndexList = (child.indexList == undefined ?
                        childrenIndexList :
                        childrenIndexList.concat(child.indexList))
                }
            }
            if (JSON.stringify(SUM_FROM_CHILDREN) == JSON.stringify(node.rule)) {
                node.value = childrenCredits;
                node.indexList = childrenIndexList;
            }
            else {
                node.value = 0;
                node.indexList = [];
                scores.lists.filter(x =>
                    node.rule.value.find(value => value===x[node.rule.key]) !== undefined &&
                    x.grade !== "不及格" &&
                    x.grade !== "---" &&
                    (isNaN(Number(x.grade)) || Number(x.grade) >= 60)
                ).forEach((course)=>{
                    node.value += Number(course.credit);
                    node.indexList.push(course.index);
                })
            }
            if (node.name != undefined) {
                node.name = node.name.concat("（", String(node.value), "）")
            }
        }

        processData(data);

        return (
            <GroupContainer>
                <ReactECharts
                    option={{
                        tooltip: {
                            trigger: 'item',
                            triggerOn: 'mousemove'
                        },
                        series: [
                            {
                                type: 'tree',
                                data: [data],
                                top: '1%',
                                left: '1%',
                                bottom: '1%',
                                right: '36%',
                                symbolSize: 10,
                                label: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left',
                                    fontSize: 13
                                },
                                emphasis: {
                                    focus: 'descendant'
                                },
                                expandAndCollapse: true,
                                animationDuration: 550,
                                animationDurationUpdate: 750
                            }
                        ]}}
                    onEvents={{
                        'click': handleChartClick,
                    }}
                />
            </GroupContainer>
        )
    }, [context.calcMode, isLoading]);

};

export default CreditChart;