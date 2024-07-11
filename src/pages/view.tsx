import { BoxCommon } from "@/atomic/atoms";
import { Item } from "@/atomic/molecules";
import { Container } from "@/atomic/organisms";
import { itemsBuy } from "@/constants/utils";
import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    onAdd,
}) => (
    <Container title="E-Commerce">
        <BoxCommon
            width="100%"
            justifycontent="center"
            gap='20px'
            flexdirection="row"
            flexwrap='wrap'
        >
            {
                itemsBuy &&
                itemsBuy?.map((item, index) => (
                    <Item
                        key={index}
                        name={item.name}
                        hero={item.hero}
                        image={item.image}
                        info={item.info}
                        detail={item.detail}
                        offer={item.offer}
                        price={item.price}
                        onClick={() => onAdd(index)}
                    />
                ))
            }
        </BoxCommon>
    </Container>
)

export default View;