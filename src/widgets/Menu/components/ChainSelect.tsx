import React from "react"
import Button from "../../../components/Button/Button"
import Link from "../../../components/Link/Link"
import Dropdown from "../../../components/Dropdown/Dropdown"
import { BinanceIcon, ChevronDownIcon, EthereumIcon } from "../../../components/Svg"

const btnStyle = {
    marginRight: 8,
    height: 32,
    width: 65
}

const listStyle = {
    padding: 0,
    border: 'none',
    height: 30,
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    cursor: 'pointer'
}

const ChainSelect = () => {
    const network = ["Ethereum", "Bianace"]

    return (
        <Dropdown position="bottom" target={
            <Button variant="tertiary" style={btnStyle}>
                <BinanceIcon />
                <ChevronDownIcon />
            </Button>}>
            <Link href="https://fastswap.finance/#/swap" style={listStyle}>
                <BinanceIcon/>Binance</Link>
            <Link href="https://fastswap.exchange/" style={listStyle}>
                <EthereumIcon/>Ethereum</Link>
        </Dropdown>
    )
}

export default ChainSelect;