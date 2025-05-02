import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Users, Activity, Gift, Star, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden rounded-xl bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image src="/placeholder.svg?height=600&width=1200" alt="FURIA Fans" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center text-white md:py-32">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">FURIA Fan Engagement</h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Participe, ganhe pontos e seja recompensado por sua lealdade à FURIA. Quanto mais você interage, mais você
            ganha!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/register">Cadastre-se Agora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Já tenho uma conta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold">Como Funciona</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-2 border-black/20">
            <CardHeader className="pb-2">
              <Trophy className="mb-2 h-12 w-12 text-black" />
              <CardTitle>Ganhe Pontos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Acumule pontos interagindo com conteúdos, participando de eventos, comentando e compartilhando posts da
                FURIA.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-black/20">
            <CardHeader className="pb-2">
              <Gift className="mb-2 h-12 w-12 text-black" />
              <CardTitle>Receba Recompensas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Troque seus pontos por produtos exclusivos, ingressos para eventos, encontros com jogadores e muito
                mais.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-black/20">
            <CardHeader className="pb-2">
              <Star className="mb-2 h-12 w-12 text-black" />
              <CardTitle>Suba de Nível</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Evolua seu perfil de fã, desbloqueie conquistas e ganhe status na comunidade FURIA.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Engagement Stats */}
      <section className="mb-12 rounded-xl bg-black/50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Comunidade FURIA</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Users className="mb-2 h-12 w-12 text-black" />
            <span className="text-3xl font-bold">10,000+</span>
            <span className="text-gray-400">Fãs Ativos</span>
          </div>

          <div className="flex flex-col items-center">
            <Activity className="mb-2 h-12 w-12 text-black" />
            <span className="text-3xl font-bold">50,000+</span>
            <span className="text-gray-400">Interações Diárias</span>
          </div>

          <div className="flex flex-col items-center">
            <TrendingUp className="mb-2 h-12 w-12 text-black" />
            <span className="text-3xl font-bold">1,000,000+</span>
            <span className="text-gray-400">Pontos Distribuídos</span>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold">Atividades Recentes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=Fan${item}`}
                      alt={`Fan ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">Fã #{item}</CardTitle>
                    <CardDescription>
                      Há {item} hora{item !== 1 ? "s" : ""}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  {item % 3 === 0
                    ? "Ganhou a conquista 'Fã Dedicado' por assistir 10 partidas consecutivas."
                    : item % 2 === 0
                      ? "Compartilhou a última vitória da FURIA e ganhou 50 pontos."
                      : "Comentou na publicação oficial e subiu para o nível Prata."}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="ml-auto">
                  Ver Perfil
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl bg-gradient-to-r from-black to-gray-800 p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Pronto para se juntar à comunidade?</h2>
        <p className="mb-6 text-lg">Cadastre-se agora e comece a ganhar pontos e recompensas exclusivas!</p>
        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          <Link href="/register">Começar Agora</Link>
        </Button>
      </section>
    </div>
  )
}
