export default function BreadCharacter({ character, size = "large" }) {
  return (
    <div className={`bread bread-${size}`}>
      <div className="bread-base">🍞</div>

      {character.spread && (
        <div className="spread">🧈 {character.spread}</div>
      )}

      {character.topping && (
        <div className="topping">🍓 {character.topping}</div>
      )}

      {character.accessory && (
        <div className="accessory">🎩 {character.accessory}</div>
      )}
    </div>
  );
}
