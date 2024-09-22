import { atom } from "recoil";

const branchList = atom({
    key: 'branchList',
    default: [{ id: 1, name: "Sample" }]
})

const activeBranch = atom({
    key: 'activeBranch',
    default: "Sample"
})

const httpTracerData = atom({
    key: 'httpTracerData',
    default: { data: [{ "type": "sample" }] }
})

export { branchList, activeBranch, httpTracerData }