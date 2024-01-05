import dynamic from 'next/dynamic'

const PortfolioView = dynamic(
  () => import('./PorfolioView'),
  {
    ssr: false,
  }
)

function PorfolioPage(props) {
  return <PortfolioView {...props} />
}

export default PorfolioPage