import { IndexProps } from "./models"
import { Main } from "./style"

const Box: React.FC<IndexProps> = ({
    children,

    mt,
    mr,
    mb,
    ml
}) => (
    <Main
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
    >
        { children }
    </Main>
)

export default Box