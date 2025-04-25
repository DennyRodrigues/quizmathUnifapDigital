import React, { JSX, useEffect, useRef, useState } from "react";
import { Settings, User, Type } from "lucide-react";
import { GAME_OBJECTS, UNITY_CONSTS, UNITY_METHOD } from "@/constants/player";

type AvatarKey = "icaro" | "hozana" | "guga";
const AVATAR_NAMES: Record<AvatarKey, string> = {
	icaro: "Ícaro",
	hozana: "Hozana",
	guga: "Guga",
};
const AVATAR_KEYS = Object.keys(AVATAR_NAMES) as AvatarKey[];

interface AvatarControlsProps {
	currentAvatar: AvatarKey;
	isShowSubtitle: boolean;
	sendMessage: (
		gameObject: string,
		method: UNITY_METHOD,
		params?: number | string,
	) => void;
	// Removed onChangeAvatar and onToggleSubtitle - state is managed by parent (LibrasCard)
	// Parent will update based on Unity events or directly after sending message if reliable.
}

export function AvatarControls({
	currentAvatar,
	isShowSubtitle,
	sendMessage,
}: AvatarControlsProps): JSX.Element {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleChangeAvatar = (avatar: AvatarKey): void => {
		// Optimistically update UI or wait for confirmation? Decide based on UX.
		// For now, send message. Parent should update `currentAvatar` prop based on confirmation if needed.
		sendMessage(
			GAME_OBJECTS.PLAYER_MANAGER,
			UNITY_CONSTS.PLAYER_MANAGER_METHODS.CHANGE_AVATAR,
			avatar,
		);
		setIsDropdownOpen(false);
	};

	const handleToggleSubtitle = (): void => {
		sendMessage(
			GAME_OBJECTS.PLAYER_MANAGER,
			UNITY_CONSTS.PLAYER_MANAGER_METHODS.SET_SUBTITLES_STATE,
			Number(!isShowSubtitle), // Send the *new* desired state
		);
		// Parent should update `isShowSubtitle` prop based on confirmation if needed.
		setIsDropdownOpen(false);
	};

	const toggleDropdown = (): void => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, buttonRef]);

	return (
		<div className="relative z-10">
			<button
				ref={buttonRef}
				className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				onClick={toggleDropdown}
				aria-label="Configurações"
				aria-haspopup="true"
				aria-expanded={isDropdownOpen}
				title="Configurações"
			>
				<Settings size={20} />
			</button>

			{isDropdownOpen && (
				<div
					ref={dropdownRef}
					className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu" // Needs an ID on the button if using this
				>
					<div className="py-1" role="none">
						<div className="border-gray-100 border-b px-4 py-2 font-medium text-gray-700 text-sm">
							Avatar Atual: {AVATAR_NAMES[currentAvatar]}
						</div>

						<div className="px-3 py-2 text-gray-500 text-xs" role="separator">
							Selecionar avatar
						</div>

						{AVATAR_KEYS.map((avatar) => (
							<button
								key={avatar}
								className={`flex w-full items-center px-4 py-2 text-left text-gray-700 text-sm hover:bg-gray-100 ${currentAvatar === avatar ? "bg-gray-50 font-medium" : ""}`}
								onClick={() => handleChangeAvatar(avatar)}
								role="menuitem"
							>
								<User size={16} className="mr-2 flex-shrink-0" />
								<span className="flex-grow">{AVATAR_NAMES[avatar]}</span>
							</button>
						))}

						<div
							className="mt-1 border-gray-100 border-t pt-1"
							role="separator"
						>
							<button
								className="flex w-full items-center px-4 py-2 text-left text-gray-700 text-sm hover:bg-gray-100"
								onClick={handleToggleSubtitle}
								role="menuitem"
							>
								<Type size={16} className="mr-2 flex-shrink-0" />
								<span className="flex-grow">
									{isShowSubtitle ? "Ocultar Legendas" : "Mostrar Legendas"}
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
