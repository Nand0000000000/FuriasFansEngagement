import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Star, Filter, Search, Gift, Clock, ArrowRight, Bookmark, Heart } from "lucide-react"

export default function RewardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Recompensas</h1>
        <p className="text-muted-foreground">Troque seus pontos por itens exclusivos da FURIA</p>
      </div>

      {/* User Points Summary */}
      <div className="mb-8 rounded-lg border bg-card p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="text-4xl font-bold">1,250</div>
            <div className="text-sm text-muted-foreground">Pontos Disponíveis</div>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Nível Prata</span>
              <span className="text-sm font-medium">Nível Ouro</span>
            </div>
            <Progress value={62} className="h-2" />
            <div className="text-xs text-muted-foreground">1250/2000 pontos para o próximo nível</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-9 gap-1">
                <Gift className="h-4 w-4" />
                <span>Histórico de Resgates</span>
              </Button>
              <Button variant="outline" className="h-9 gap-1">
                <Clock className="h-4 w-4" />
                <span>Pendentes</span>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">Você já resgatou 3 recompensas</div>
          </div>
        </div>
      </div>

      {/* Featured Rewards */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recompensas em Destaque</h2>
          <Button variant="link" className="gap-1 text-black">
            <span>Ver todas</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Reward 1 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=225&width=400&text=Jersey"
                  alt="Camisa Oficial FURIA"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <Badge className="absolute left-4 top-4 bg-black">Em Destaque</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Camisa Oficial FURIA</CardTitle>
                <Badge variant="outline" className="font-normal">
                  Produtos
                </Badge>
              </div>
              <CardDescription>Edição limitada 2023 - Tamanhos P, M, G</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-xs text-muted-foreground">(32 avaliações)</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-black px-3 py-1 text-base">2000 pontos</Badge>
                <div className="text-sm text-muted-foreground">Restam 15 unidades</div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-black hover:bg-gray-800" disabled={1250 < 2000}>
                {1250 >= 2000 ? "Resgatar Agora" : "Pontos Insuficientes"}
              </Button>
            </CardFooter>
          </Card>

          {/* Featured Reward 2 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=225&width=400&text=Meet&Greet"
                  alt="Meet & Greet Virtual"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <Badge className="absolute left-4 top-4 bg-black">Em Destaque</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Meet & Greet Virtual</CardTitle>
                <Badge variant="outline" className="font-normal">
                  Experiências
                </Badge>
              </div>
              <CardDescription>30 minutos com jogadores do time de CS2</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4" />
                <span className="ml-1 text-xs text-muted-foreground">(18 avaliações)</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-black px-3 py-1 text-base">1500 pontos</Badge>
                <div className="text-sm text-muted-foreground">Restam 3 vagas</div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-black hover:bg-gray-800" disabled={1250 < 1500}>
                {1250 >= 1500 ? "Resgatar Agora" : "Pontos Insuficientes"}
              </Button>
            </CardFooter>
          </Card>

          {/* Featured Reward 3 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=225&width=400&text=Mousepad"
                  alt="Mousepad Exclusivo"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <Badge className="absolute left-4 top-4 bg-black">Em Destaque</Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Mousepad Exclusivo</CardTitle>
                <Badge variant="outline" className="font-normal">
                  Produtos
                </Badge>
              </div>
              <CardDescription>Mousepad gamer edição especial FURIA</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-xs text-muted-foreground">(45 avaliações)</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-black px-3 py-1 text-base">800 pontos</Badge>
                <div className="text-sm text-muted-foreground">Restam 27 unidades</div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-black hover:bg-gray-800">Resgatar Agora</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search */}
              <div className="space-y-2">
                <Label htmlFor="search-rewards">Buscar</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search-rewards" placeholder="Buscar recompensas..." className="pl-8" />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <Label>Categorias</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-all" defaultChecked />
                    <Label htmlFor="category-all" className="text-sm">
                      Todas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-products" />
                    <Label htmlFor="category-products" className="text-sm">
                      Produtos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-experiences" />
                    <Label htmlFor="category-experiences" className="text-sm">
                      Experiências
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-digital" />
                    <Label htmlFor="category-digital" className="text-sm">
                      Digital
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-discounts" />
                    <Label htmlFor="category-discounts" className="text-sm">
                      Descontos
                    </Label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Points Range */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Pontos</Label>
                  <span className="text-xs text-muted-foreground">100 - 5000</span>
                </div>
                <Slider defaultValue={[100, 5000]} min={100} max={5000} step={100} />
                <div className="flex items-center justify-between">
                  <div className="w-20">
                    <Input type="number" defaultValue={100} min={100} max={5000} className="h-8" />
                  </div>
                  <span className="text-xs">até</span>
                  <div className="w-20">
                    <Input type="number" defaultValue={5000} min={100} max={5000} className="h-8" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Availability */}
              <div className="space-y-2">
                <Label>Disponibilidade</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="availability-all" defaultChecked />
                    <Label htmlFor="availability-all" className="text-sm">
                      Todas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="availability-in-stock" />
                    <Label htmlFor="availability-in-stock" className="text-sm">
                      Em estoque
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="availability-affordable" />
                    <Label htmlFor="availability-affordable" className="text-sm">
                      Posso resgatar (1250 pts)
                    </Label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Aplicar Filtros</Button>
            </CardContent>
          </Card>
        </div>

        {/* Rewards List */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="popular">Populares</TabsTrigger>
                <TabsTrigger value="new">Novidades</TabsTrigger>
                <TabsTrigger value="affordable">Posso Resgatar</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                  <SelectItem value="oldest">Mais antigos</SelectItem>
                  <SelectItem value="points-asc">Pontos: menor para maior</SelectItem>
                  <SelectItem value="points-desc">Pontos: maior para menor</SelectItem>
                  <SelectItem value="popularity">Popularidade</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Camisa Oficial FURIA",
                category: "Produtos",
                points: 2000,
                image: "Jersey",
                description: "Edição limitada 2023 - Tamanhos P, M, G",
                stock: 15,
                rating: 5,
                reviews: 32,
                isNew: false,
              },
              {
                title: "Meet & Greet Virtual",
                category: "Experiências",
                points: 1500,
                image: "Meet&Greet",
                description: "30 minutos com jogadores do time de CS2",
                stock: 3,
                rating: 4,
                reviews: 18,
                isNew: false,
              },
              {
                title: "Mousepad Exclusivo",
                category: "Produtos",
                points: 800,
                image: "Mousepad",
                description: "Mousepad gamer edição especial FURIA",
                stock: 27,
                rating: 5,
                reviews: 45,
                isNew: false,
              },
              {
                title: "Ingresso para Evento",
                category: "Experiências",
                points: 3000,
                image: "Ticket",
                description: "Acesso VIP para próximo campeonato",
                stock: 5,
                rating: 5,
                reviews: 12,
                isNew: true,
              },
              {
                title: "10% de Desconto na Loja",
                category: "Descontos",
                points: 500,
                image: "Discount",
                description: "Válido para qualquer produto da loja oficial",
                stock: "Ilimitado",
                rating: 4,
                reviews: 67,
                isNew: false,
              },
              {
                title: "Papel de Parede Exclusivo",
                category: "Digital",
                points: 100,
                image: "Wallpaper",
                description: "Pacote com 5 papéis de parede em alta resolução",
                stock: "Ilimitado",
                rating: 3,
                reviews: 28,
                isNew: false,
              },
              {
                title: "Boné FURIA",
                category: "Produtos",
                points: 1200,
                image: "Cap",
                description: "Boné ajustável com logo bordado",
                stock: 22,
                rating: 4,
                reviews: 15,
                isNew: true,
              },
              {
                title: "Adesivos Colecionáveis",
                category: "Produtos",
                points: 300,
                image: "Stickers",
                description: "Conjunto com 10 adesivos exclusivos",
                stock: 50,
                rating: 4,
                reviews: 33,
                isNew: false,
              },
              {
                title: "Análise de Gameplay",
                category: "Experiências",
                points: 1800,
                image: "Gameplay",
                description: "Análise da sua gameplay por um pro player",
                stock: 2,
                rating: 5,
                reviews: 7,
                isNew: true,
              },
            ].map((reward, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={`/placeholder.svg?height=225&width=400&text=${reward.image}`}
                      alt={reward.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {reward.isNew && <Badge className="absolute left-4 top-4 bg-black">Novo</Badge>}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="line-clamp-1 text-lg">{reward.title}</CardTitle>
                    <Badge variant="outline" className="font-normal">
                      {reward.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-1">{reward.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < reward.rating ? "fill-yellow-500 text-yellow-500" : ""}`}
                      />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">({reward.reviews} avaliações)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-black px-3 py-1">{reward.points} pontos</Badge>
                    <div className="text-sm text-muted-foreground">
                      {typeof reward.stock === "number" ? `Restam ${reward.stock} unidades` : reward.stock}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-black hover:bg-gray-800"
                    disabled={typeof reward.points === "number" && 1250 < reward.points}
                  >
                    {typeof reward.points === "number" && 1250 >= reward.points
                      ? "Resgatar Agora"
                      : "Pontos Insuficientes"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              ...
            </Button>
            <Button variant="outline" className="mx-1">
              8
            </Button>
          </div>
        </div>
      </div>

      {/* Redemption Process */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Como Funciona o Resgate</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <span className="text-xl font-bold">1</span>
            </div>
            <CardTitle className="mb-2">Escolha sua Recompensa</CardTitle>
            <CardDescription>
              Navegue pelo catálogo e escolha a recompensa que deseja resgatar com seus pontos.
            </CardDescription>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <span className="text-xl font-bold">2</span>
            </div>
            <CardTitle className="mb-2">Confirme o Resgate</CardTitle>
            <CardDescription>
              Verifique se você tem pontos suficientes e confirme o resgate da recompensa.
            </CardDescription>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <span className="text-xl font-bold">3</span>
            </div>
            <CardTitle className="mb-2">Acompanhe o Status</CardTitle>
            <CardDescription>Acompanhe o status do seu resgate na seção "Histórico de Resgates".</CardDescription>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <span className="text-xl font-bold">4</span>
            </div>
            <CardTitle className="mb-2">Receba sua Recompensa</CardTitle>
            <CardDescription>Receba sua recompensa digital instantaneamente ou física pelo correio.</CardDescription>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Perguntas Frequentes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Como ganho pontos?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Você ganha pontos interagindo com conteúdos da FURIA, como assistir partidas ao vivo, compartilhar posts
                nas redes sociais, participar de eventos e muito mais. Cada ação tem uma pontuação específica.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quanto tempo leva para receber minha recompensa?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Recompensas digitais são entregues instantaneamente. Para produtos físicos, o prazo de entrega é de 7 a
                15 dias úteis, dependendo da sua localização.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Os pontos expiram?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sim, os pontos têm validade de 12 meses a partir da data em que foram ganhos. Recomendamos utilizar seus
                pontos regularmente para não perdê-los.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Posso transferir pontos para outro usuário?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Atualmente não é possível transferir pontos entre usuários. Cada conta acumula e utiliza seus próprios
                pontos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-black p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Não encontrou o que procura?</h2>
        <p className="mb-6 text-lg">Sugira novas recompensas e nos ajude a melhorar nosso programa de fidelidade.</p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          Enviar Sugestão
        </Button>
      </div>
    </div>
  )
}
