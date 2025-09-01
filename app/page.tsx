import { Montserrat, Open_Sans } from 'next/font/google'
import AcademyLanding from "@/components/academy-landing"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export default function Page() {
  return (
    <AcademyLanding
      formUrl="https://forms.gle/w29mizNkhcNMPy1m9"
      defaultLocale="ro"
      headingFont={montserrat.className}
      bodyFont={openSans.className}
    />
  )
}
