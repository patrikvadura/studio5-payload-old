import { Button } from '../_components/Button'

export default function NotFound() {
  return (
    <div className="container py-32">
      <div className="max-w-screen-md space-y-8">
        <h1 className="text-gray-300 text-[100px] font-bold">404</h1>

        <h3 className="text-secondary text-2xl font-bold">Stránka nebyla nalezena</h3>

        <p className="text-secondary">
          Omlouváme seza potíže, důvodem může být že zvolená stránka neexistuje nebo aktuálně
          prochází údržbou. Prosím zkontrolujte cestu aktuální adresy a případně se vraťe zpět.
        </p>
        <Button href="/" label="Zpět na úvod" appearance="dynamic" />
      </div>
    </div>
  )
}
