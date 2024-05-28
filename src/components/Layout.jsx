import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav className="p-4 bg-blue-400">
				<ul className="flex justify-center space-x-4 list-none">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link
							to="/page01"
							className="text-white hover:text-gray-400"
						>
							One
						</Link>
					</li>
					<li>
						<Link
							to="/page02"
							className="text-white hover:text-gray-400"
						>
							Two
						</Link>
					</li>
					<li>
						<Link
							to="/page03"
							className="text-white hover:text-gray-400"
						>
							Three
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Layout;
