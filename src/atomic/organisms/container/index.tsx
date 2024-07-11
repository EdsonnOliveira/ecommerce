import { Header } from "@/atomic/molecules";
import { IndexProps } from "./models";
import { Main, Section } from "./style";
import Head from "next/head";

const Container: React.FC<IndexProps> = ({
    title,
    children,
}) => (
    <Main>
        <Head>
            <title>{ title }</title>
        </Head>
        <Header title={title} />
        <Section>
            { children }
        </Section>
    </Main>
)

export default Container;