import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="flex gap-4">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/about" className="hover:text-blue-600">About</Link>
                <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
        </nav>
    );
}
