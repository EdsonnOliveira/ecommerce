import { BoxCommon } from "@/atomic/atoms";
import { Item } from "@/atomic/molecules";
import { Container } from "@/atomic/organisms";
import { ViewProps } from "./models";
import { formatNumber } from "@/constants/format";

const View: React.FC<ViewProps> = ({
    items,
    onRemove,
    valueTotal,
}) => (
    <Container title="E-Commerce">
        <BoxCommon
            width="100%"
            alignitems="center"
            gap='20px'
        >
            <h3 className="fontCenter">
                {
                    valueTotal > 0
                    ? `Total: ${formatNumber(valueTotal)}`
                    : 'Seu carrinho está vazio!'
                }
            </h3>
            {
                items &&
                items?.map((item, index) => (
                    <Item
                        key={index}
                        name={item.name}
                        hero={item.hero}
                        image={item.image}
                        detail={item.detail}
                        offer={item.offer}
                        info={item.info}
                        price={item.price}
                        onClick={() => onRemove(index)}
                        isRemove
                    />
                ))
            }
        </BoxCommon>
    </Container>
)

export default View;