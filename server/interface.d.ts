interface RouterInterface {
     routerInit: (req: object | any, res: object | any) => void
}

interface stringRequired {
     type: String
     require: true
}
