export const Rating = ({ vote }) => {
  const rating = Number(vote)

  if (!Number.isFinite(rating) || rating <= 0) {
    return <span>Nincs értékelés</span>
  }

  const stars = Math.max(0, Math.min(5, Math.round(rating / 2)))

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((nr) => (
          <span
            key={nr}
            className={nr <= stars ? "text-yellow-400 text-xl" : "text-gray-600 text-xl"}
          >
            ★
          </span>
        ))}
      </div>
      <span>{rating.toFixed(1)}/10</span>
    </div>
  )
}