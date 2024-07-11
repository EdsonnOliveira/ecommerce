import { memo } from "react"
import { IndexProps } from "./models"
import { Img, Main } from "./style"
import { BoxCommon, Button, Stamp } from "@/atomic/atoms"
import { formatNumber } from "@/constants/format"

const Item: React.FC<IndexProps> = ({
    name,
    price,
    detail,
    image,
    hero,
    info,
    offer,
    onClick,
    isRemove,
}) => (
    <Main>
        <BoxCommon flexdirection="row">
            <BoxCommon width="200px">
                <h4>{ name }</h4>
                <h5 className="fontGray">{ detail }</h5>
            </BoxCommon>
            <Stamp
                text={`${formatNumber(Number(price))}`}
                color="primary"
                textColor="white"
            />
        </BoxCommon>
        <Img src={image} alt={name} />
        { hero && <h5 className="fontPrimary fontItalic">{ hero }</h5> }
        { offer && <h5 className="fontRed fontW600">{ offer }</h5> }
        { info && <h5 className="fontGray">{ info }</h5> }
        <Button
            type='biggest'
            color={isRemove ? 'mandy' : 'azureRadiance'}
            text={isRemove ? 'Remover' : 'Adicionar'}
            onClick={onClick}
        />
    </Main>
)

export default memo(Item)