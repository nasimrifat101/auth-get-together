import { Outlet } from 'react-router-dom';
import Navs from './Navs';

const Root = () => {
    return (
        <div>
            <Navs></Navs>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;