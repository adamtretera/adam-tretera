import {useEffect, useRef, useState} from "react";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import {CSSTransition} from "react-transition-group"

export default function Navbar() {

    return (
        <nav className="h-20 px-8 ">
            <ul className="max-w-full h-full flex justify-between">
                <li className="flex items-center justify-center text-xl">
                    Adam Tretera.
                </li>


                <NavItem icon="🖐">
                    <DropdownMenu/>
                </NavItem>


            </ul>


        </nav>

    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false)
    return (
        <li className="w-16 flex items-center justify-center">
            <a className="w-10 h-10 rounded-full bg-primary-100  dark:bg-primary-800 items-center justify-center flex px-1 hover:bg-opacity-80 transition duration-500 ease"
               href={"#"} onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }


    function DropdownItem(props) {
        return <a
            className="h-50 flex items-center rounded-2xl p-2 text-black dark:text-primary-100 transition-colors   duration-300 "
            onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span
                className="w-10 h-10 rounded-full mr-2 bg-primary-100 dark:bg-primary-900 items-center justify-center flex px-1">{props.leftIcon}</span>
            {props.children}
            <span className="ml-auto text-2xl">{props.rightIcon}</span>


        </a>
    }

    return (
        <div
            className="absolute top-60 w-300 transform -translate-x-1/2 bg-primary-0 shadow-2xl p-4 overflow-hidden rounded-2xl dropdown dark:bg-primary-800 dark:text-primary-200 "
            style={{height: menuHeight}} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="w-full">
                    <DropdownItem leftIcon={"💅"} goToMenu={"design"} rightIcon={<CgArrowRightO/>}>
                        Design
                    </DropdownItem>
                    <DropdownItem leftIcon={"💳"} goToMenu={"payment"} rightIcon={<CgArrowRightO/>}>
                        Payment
                    </DropdownItem>
                </div>

            </CSSTransition>
            <CSSTransition in={activeMenu === "design"}
                           unmountOnExit
                           timeout={500}
                           classNames="menu-secondary"
                           onEnter={calcHeight}
            >
                <div>
                    <DropdownItem goToMenu={"main"} leftIcon={"💅"} rightIcon={<CgArrowLeftO/>}>
                        Design
                    </DropdownItem>
                    <DropdownItem rightIcon={"🤖"}>
                        My profile
                    </DropdownItem>
                    <DropdownItem rightIcon={"🤖"}>
                        My profile
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === "payment"}
                           unmountOnExit
                           timeout={500}
                           classNames="menu-secondary"
                           onEnter={calcHeight}
            >
                <div>
                    <DropdownItem goToMenu={"main"} leftIcon={"💅"} rightIcon={<CgArrowLeftO/>}>
                        Design
                    </DropdownItem>
                    <DropdownItem rightIcon={"🤖"}>
                        My profile
                    </DropdownItem>
                    <DropdownItem rightIcon={"🤖"}>
                        My profile
                    </DropdownItem>
                </div>
            </CSSTransition>


        </div>
    )
}
