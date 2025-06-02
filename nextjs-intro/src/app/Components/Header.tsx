import Link from "next/link";

const Header = () => {
	return (
		<header className="m-2">
			<nav>
				<ul className="flex items-center justify-between">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
