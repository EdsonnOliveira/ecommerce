import { BoxCommon } from "@/atomic/atoms";

import { IndexProps } from "./models";
import { Main, Option } from "./style";
import { useRouter } from "next/router";

const pages = [
    {
        label: 'Início',
        name: '/',
    },
    {
        label: 'Carrinho',
        name: '/cart',
    },
]

const Header: React.FC<IndexProps> = ({
    title,
}) => {
    const route = useRouter()

    return (
        <Main>
            <h2 className="fontWhite">{ title }</h2>
            <BoxCommon
                flexdirection="row"
                gap='50px'
            >
                {
                    pages &&
                    pages?.map((item, index) => (
                        <Option
                            key={index}
                            selected={route.pathname === item.name}
                            href={item.name}
                        >
                            { item.label }
                        </Option>
                    ))
                }
            </BoxCommon>
        </Main>
    )
}

export default Header;