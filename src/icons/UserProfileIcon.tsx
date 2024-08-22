type UserProfileIconProps = {
	width: string | number | undefined
	height: string | number | undefined
	fill: string
}

export default function UserProfileIcon(props: UserProfileIconProps) {
	return (
		<svg width={props.width} height={props.height} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.528" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
			<g id="SVGRepo_bgCarrier" stroke-width="0" />
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
			<g id="SVGRepo_iconCarrier" >
				<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill={props.fill} />
			</g>
		</svg >
	)
}
