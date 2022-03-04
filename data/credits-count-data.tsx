import {SUM_FROM_CHILDREN,TreeNode} from "../components/app/score/credit/Chart";


export const DATA_BEFORE_2019: TreeNode = {
    "rule": SUM_FROM_CHILDREN,
    "children": [{
        "name": "必修",
        "rule": {
            "key": "attributes",
            "value": ["必修"],
        }
    }, {
        "name": "专业选修",
        "rule": {
            "key": "kind",
            "value": ["专业选修课程", "专业选修课", "19专业选修课程"],
        }
    }, {
        "name": "通识教育选修",
        "rule": SUM_FROM_CHILDREN,
        "children": [{
            "name": "文化素养教育",
            "rule": SUM_FROM_CHILDREN,
            "children": [{
                "name": "A 中外历史与文化",
                "rule": {
                    "key": "kind",
                    "value": ["中外历史与文化"],
                }
            }, {
                "name": "B 语言与文学",
                "rule": {
                    "key": "kind",
                    "value": ["语言与文学"],
                }
            }, {
                "name": "C 哲学人生与社会科学",
                "rule": {
                    "key": "kind",
                    "value": ["哲学人生与社会科学"],
                }
            }, {
                "name": "D 艺术修养与审美",
                "rule": {
                    "key": "kind",
                    "value": ["艺术修养与审美"],
                }
            }, {
                "name": "E 自然科学与人类文明",
                "rule": {
                    "key": "kind",
                    "value": ["自然科学与人类文明"],
                }
            }, {
                "name": "F 国防文化与船海史话",
                "rule": {
                    "key": "kind",
                    "value": ["国防文化与船海史话"],
                }
            }, {
                "name": "G 中华优秀传统文化",
                "rule": {
                    "key": "kind",
                    "value": ["中华传统文化", "19中华传统文化类（A0）"],
                }
            }
            ]
        }, {
            "name": "新生研讨",
            "rule": {
                "key": "kind",
                "value": ["新生研讨类"],
            }
        }, {
            "name": "专业拓展",
            "rule": {
                "key": "kind",
                "value": ["专业拓展类"],
            }
        }, {
            "name": "创新创业",
            "rule": {
                "key": "kind",
                "value": ["创新创业类", "19创新创业综合实践课程"],
            }
        },
        ]
    }
    ]
}

export const DATA_AFTER_2019: TreeNode = {
    "rule": SUM_FROM_CHILDREN,
    "children": [{
        "name": "必修",
        "rule": {
            "key": "attributes",
            "value": ["必修"],
        }
    }, {
        "name": "专业选修",
        "rule": {
            "key": "kind",
            "value": ["专业选修课程", "专业选修课", "19专业选修课程"],
        }
    }, {
        "name": "通识教育选修",
        "rule": SUM_FROM_CHILDREN,
        "children": [{
            "name": "A 人文素质与文化传承",
            "rule": {
                "key": "kind",
                "value": ["19人文素质与文化传承（A）", "中华传统文化", "19中华传统文化类（A0）"],
            }
        }, {
            "name": "B 艺术鉴赏与审美体验",
            "rule": {
                "key": "kind",
                "value": ["19艺术鉴赏与审美体验（B）", "艺术修养与审美"],
            }
        }, {
            "name": "C 社会发展与公民责任",
            "rule": {
                "key": "kind",
                "value": ["19社会发展与公民责任（C）"],
            }
        }, {
            "name": "D 自然科学与工程技术",
            "rule": {
                "key": "kind",
                "value": ["19自然科学与工程技术（D）"],
            }
        }, {
            "name": "E 三海一核与国防建设",
            "rule": {
                "key": "kind",
                "value": ["19三海一核与国防建设（E）"],
            }
        }, {
            "name": "F 创新思维与创业实践",
            "rule": {
                "key": "kind",
                "value": ["19创新思维与创业实践（F）", "创新创业类", ],
            }
        }
        ]
    }
    ]
}
