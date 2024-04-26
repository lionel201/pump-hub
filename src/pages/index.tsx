import { Container } from '@/common/components/layout/Container'
import { BannerPage } from '@/common/components/views/home/BannerPage'
import { CoinListing } from '@/common/components/views/home/CoinListing'

export default function Home() {
  return (
    <>
      <BannerPage />
      <Container>
        <CoinListing />
      </Container>
    </>
  )
}
