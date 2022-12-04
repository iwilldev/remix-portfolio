export function Container({
  left,
  right,
  colReverse
}: {
  left: React.ReactNode,
  right?: React.ReactNode,
  colReverse?: boolean
}) {
  return (
    <section className={`container mx-auto py-24 lg:py-48 px-6 lg:px-8 w-full flex lg:flex-row gap-16 ${colReverse ? 'flex-col-reverse' : 'flex-col'}`}>
      <div className="h-full flex-1">
        {left}
      </div>
      {
        right
          ? (
            <div className="w-full h-full lg:w-1/2">
              {right}
            </div>
          ) : null
      }
    </section>
  );
}