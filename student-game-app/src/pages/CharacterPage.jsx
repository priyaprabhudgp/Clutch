import BreadCharacter from "../components/BreadCharacter";
import InventoryCupboard from "../components/InventoryCupboard";

export default function CharacterPage({
  character,
  setCharacter,
  inventory,
}) {
  return (
    <div>
      <h1>Customize Your Bread</h1>

      <BreadCharacter character={character} />

      <InventoryCupboard
        inventory={inventory}
        onEquip={(type, item) =>
          setCharacter(prev => ({ ...prev, [type]: item }))
        }
      />
    </div>
  );
}
