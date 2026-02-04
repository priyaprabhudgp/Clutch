import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import "./PasswordToggleFieldDemo.css";

// Controlled password field component with scoped classes to avoid global CSS leaks
const PasswordToggleFieldDemo = ({ value, onChange, placeholder, required, name }) => (
	<PasswordToggleField.Root>
		<div className="ptf-Root">
			<PasswordToggleField.Input
				className="ptf-Input"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				name={name}
			/>
			<PasswordToggleField.Toggle className="ptf-Toggle">
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);

export default PasswordToggleFieldDemo;
