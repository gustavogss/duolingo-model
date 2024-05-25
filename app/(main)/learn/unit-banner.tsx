type UnitBannerProps = {
  title: string,
  description: string,
}

export function UnitBanner({ title, description }: UnitBannerProps) {
  return (
    <div className="flex">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}