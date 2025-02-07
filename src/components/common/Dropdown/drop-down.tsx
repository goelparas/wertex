import { useEffect, useRef, useState } from "react";
interface DropdownProps {
    options: readonly string[];
    value?: string;
    onChange: (value: string) => void;
    defaultValue?:string
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange ,defaultValue="Select options" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative h-full w-full border border-border">
            <div
                className="h-full  p-2 py-3 sm:py-3 bg-foreground text-xs sm:text-sm  text-primary cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value || defaultValue}
                <span className="mx-2">▼</span>
            </div>

            {isOpen && (
                <ul className="absolute w-full mt-1  shadow-lg z-10 bg-foreground  text-primary">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="p-2 hover:bg-custom-gradient hover:text-white cursor-pointer text-xs sm:text-sm "
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Dropdown
