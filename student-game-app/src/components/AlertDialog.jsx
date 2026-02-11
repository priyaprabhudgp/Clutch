import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./AlertDialog.css";

const PackResultDialog = ({ isOpen, onClose, pulledItem, isDupe, itemImage, itemName }) => (
	<AlertDialog.Root open={isOpen} onOpenChange={onClose}>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="AlertDialogOverlay" />
			<AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					Your blind pick: {itemName || "[Loading...]"}
				</AlertDialog.Title>
				
				{itemImage && (
					<div style={{ textAlign: "center", margin: "20px 0" }}>
						<img 
							src={itemImage} 
							alt={itemName} 
							style={{ maxWidth: "200px", maxHeight: "200px", borderRadius: "8px" }}
						/>
					</div>
				)}

				<AlertDialog.Description className="AlertDialogDescription">
					{isDupe ? (
						"This is a dupe :( Better luck next time!"
					) : (
						"Good work! Turn in more assignments to earn packs :)"
					)}
				</AlertDialog.Description>

				<div style={{ display: "flex", gap: 25, justifyContent: "flex-end", marginTop: "20px" }}>
					<AlertDialog.Action asChild>
						<button className="Button violet" onClick={onClose}>
							Got it!
						</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
);

export default PackResultDialog;
