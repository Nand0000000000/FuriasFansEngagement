import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import {
  Search,
  Plus,
  Download,
  Filter,
  Users,
  Trophy,
  Gift,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
} from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          <p className="text-muted-foreground">Gerencie a plataforma de engajamento de fãs da FURIA</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Exportar Dados
          </Button>
          <Button className="bg-black hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total de Fãs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,432</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Engajamento Diário</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,827</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8%</span> em relação à semana anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recompensas Resgatadas</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">-3%</span> em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conquistas Desbloqueadas</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,392</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15%</span> em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="analytics" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analytics">Análise de Dados</TabsTrigger>
          <TabsTrigger value="users">Gerenciar Usuários</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="mt-6 space-y-6">
          {/* Engagement Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Análise de Engajamento</CardTitle>
              <CardDescription>Visão geral do engajamento dos fãs nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 h-[300px] w-full rounded-lg border bg-muted/20 p-4">
                <div className="flex h-full items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-muted">Gráfico de Engajamento</span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-semibold">Engajamento por Tipo de Conteúdo</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Partidas ao vivo</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Posts nas redes sociais</span>
                        <span>30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Eventos</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Vídeos</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Perfil Demográfico dos Fãs</h3>
                  <div className="mb-4 h-[200px] w-full rounded-lg border bg-muted/20 p-4">
                    <div className="flex h-full items-center justify-center">
                      <PieChart className="h-12 w-12 text-muted" />
                      <span className="ml-2 text-muted">Gráfico Demográfico</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium">Faixa Etária Principal</h4>
                      <p className="text-xl font-bold">18-24 anos</p>
                      <p className="text-xs text-muted-foreground">65% dos usuários</p>
                    </div>
                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium">Região Principal</h4>
                      <p className="text-xl font-bold">Sudeste</p>
                      <p className="text-xs text-muted-foreground">70% dos usuários</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Insights e Recomendações</CardTitle>
              <CardDescription>Análises baseadas nos dados de engajamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Oportunidades de Engajamento</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>
                        O engajamento aumenta 45% durante transmissões ao vivo com chat exclusivo para membros.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>Fãs que conectam redes sociais têm 3x mais probabilidade de compartilhar conteúdo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>Conteúdo de bastidores gera 2x mais comentários que outros tipos de conteúdo.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Recomendações de Ação</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Calendar className="mt-0.5 h-4 w-4 text-[#ff3e3e]" />
                      <span>
                        Agendar mais eventos de meet & greet virtuais nos finais de semana, quando o engajamento é 35%
                        maior.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="mt-0.5 h-4 w-4 text-[#ff3e3e]" />
                      <span>Criar mais recompensas na faixa de 500-1000 pontos, onde há maior conversão.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="mt-0.5 h-4 w-4 text-[#ff3e3e]" />
                      <span>
                        Implementar conquistas relacionadas a compartilhamento de conteúdo para aumentar o alcance
                        orgânico.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Usuários</CardTitle>
              <CardDescription>Visualize e gerencie os fãs cadastrados na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar usuários..." className="pl-8" />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
                <Select defaultValue="active">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativos</SelectItem>
                    <SelectItem value="inactive">Inativos</SelectItem>
                    <SelectItem value="new">Novos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Usuário</TableHead>
                      <TableHead>Nível</TableHead>
                      <TableHead>Pontos</TableHead>
                      <TableHead>Engajamento</TableHead>
                      <TableHead>Cadastro</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "João Silva",
                        username: "joaosilva",
                        level: "Ouro",
                        points: 3250,
                        engagement: "Alto",
                        date: "12/01/2023",
                        status: "Ativo",
                      },
                      {
                        name: "Maria Santos",
                        username: "mariasantos",
                        level: "Prata",
                        points: 1850,
                        engagement: "Médio",
                        date: "25/02/2023",
                        status: "Ativo",
                      },
                      {
                        name: "Pedro Oliveira",
                        username: "pedrooliveira",
                        level: "Bronze",
                        points: 750,
                        engagement: "Baixo",
                        date: "10/03/2023",
                        status: "Inativo",
                      },
                      {
                        name: "Ana Costa",
                        username: "anacosta",
                        level: "Diamante",
                        points: 5200,
                        engagement: "Muito Alto",
                        date: "05/01/2022",
                        status: "Ativo",
                      },
                      {
                        name: "Lucas Ferreira",
                        username: "lucasferreira",
                        level: "Prata",
                        points: 1450,
                        engagement: "Médio",
                        date: "18/04/2023",
                        status: "Ativo",
                      },
                    ].map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                              <Image
                                src={`/placeholder.svg?height=32&width=32&text=${user.username.charAt(0).toUpperCase()}`}
                                alt={user.name}
                                width={32}
                                height={32}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-xs text-muted-foreground">@{user.username}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.level}</TableCell>
                        <TableCell>{user.points}</TableCell>
                        <TableCell>{user.engagement}</TableCell>
                        <TableCell>{user.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={user.status === "Ativo" ? "default" : "secondary"}
                            className={user.status === "Ativo" ? "bg-green-500" : ""}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Detalhes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Mostrando 5 de 10,432 usuários</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm">
                    Próximo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Segmentação de Usuários</CardTitle>
              <CardDescription>Crie grupos de usuários para campanhas direcionadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="segment-name">Nome do Segmento</Label>
                  <Input id="segment-name" placeholder="Ex: Fãs Altamente Engajados" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segment-description">Descrição</Label>
                  <Input id="segment-description" placeholder="Descrição breve do segmento" />
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <Label>Critérios de Segmentação</Label>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um critério" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="level">Nível</SelectItem>
                        <SelectItem value="points">Pontos</SelectItem>
                        <SelectItem value="engagement">Engajamento</SelectItem>
                        <SelectItem value="registration">Data de Cadastro</SelectItem>
                        <SelectItem value="location">Localização</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Condição" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="equals">Igual a</SelectItem>
                        <SelectItem value="greater">Maior que</SelectItem>
                        <SelectItem value="less">Menor que</SelectItem>
                        <SelectItem value="contains">Contém</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input placeholder="Valor" />
                  </div>

                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Adicionar Critério
                  </Button>
                </div>
              </div>

              <Button className="bg-black hover:bg-gray-800">Criar Segmento</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Recompensas</CardTitle>
              <CardDescription>Crie e gerencie as recompensas disponíveis para os fãs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Input placeholder="Buscar recompensas..." className="w-[250px]" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="merchandise">Produtos</SelectItem>
                      <SelectItem value="experiences">Experiências</SelectItem>
                      <SelectItem value="digital">Digital</SelectItem>
                      <SelectItem value="discounts">Descontos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-black hover:bg-gray-800">
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Recompensa
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Camisa Oficial FURIA", points: 2000, category: "Produtos", stock: 50, image: "shirt" },
                  { title: "Meet & Greet Virtual", points: 1500, category: "Experiências", stock: 10, image: "meet" },
                  { title: "Ingresso para Evento", points: 3000, category: "Experiências", stock: 25, image: "ticket" },
                  { title: "Mousepad Exclusivo", points: 800, category: "Produtos", stock: 100, image: "mousepad" },
                  {
                    title: "10% de Desconto na Loja",
                    points: 500,
                    category: "Descontos",
                    stock: "Ilimitado",
                    image: "discount",
                  },
                  {
                    title: "Papel de Parede Exclusivo",
                    points: 100,
                    category: "Digital",
                    stock: "Ilimitado",
                    image: "wallpaper",
                  },
                ].map((reward, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={`/placeholder.svg?height=120&width=240&text=${reward.image}`}
                        alt={reward.title}
                        width={240}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{reward.title}</CardTitle>
                        <Badge variant="outline">{reward.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge className="bg-black">{reward.points} pontos</Badge>
                        <span className="text-sm text-muted-foreground">Estoque: {reward.stock}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Desativar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Recompensa</CardTitle>
              <CardDescription>Crie uma nova recompensa para os fãs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="reward-title">Título</Label>
                  <Input id="reward-title" placeholder="Nome da recompensa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reward-category">Categoria</Label>
                  <Select>
                    <SelectTrigger id="reward-category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="merchandise">Produtos</SelectItem>
                      <SelectItem value="experiences">Experiências</SelectItem>
                      <SelectItem value="digital">Digital</SelectItem>
                      <SelectItem value="discounts">Descontos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reward-points">Pontos Necessários</Label>
                  <Input id="reward-points" type="number" placeholder="Ex: 1000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reward-stock">Estoque</Label>
                  <Input id="reward-stock" type="number" placeholder="Quantidade disponível" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="reward-description">Descrição</Label>
                  <Textarea id="reward-description" placeholder="Descreva a recompensa em detalhes" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="reward-image">Imagem</Label>
                  <Input id="reward-image" type="file" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Button className="bg-black hover:bg-gray-800">Criar Recompensa</Button>
                <Button variant="outline">Cancelar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campanhas de Engajamento</CardTitle>
              <CardDescription>Gerencie campanhas para aumentar o engajamento dos fãs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Input placeholder="Buscar campanhas..." className="w-[250px]" />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="active">Ativas</SelectItem>
                      <SelectItem value="scheduled">Agendadas</SelectItem>
                      <SelectItem value="completed">Concluídas</SelectItem>
                      <SelectItem value="draft">Rascunho</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-[#ff3e3e] hover:bg-[#cc3232]">
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Campanha
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campanha</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Término</TableHead>
                      <TableHead>Participantes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Desafio de Compartilhamento",
                        type: "Social",
                        start: "10/04/2023",
                        end: "20/04/2023",
                        participants: 1245,
                        status: "Concluída",
                      },
                      {
                        name: "Bônus de Pontos - CS2",
                        type: "Evento",
                        start: "15/05/2023",
                        end: "18/05/2023",
                        participants: 850,
                        status: "Ativa",
                      },
                      {
                        name: "Quiz FURIA",
                        type: "Interação",
                        start: "01/06/2023",
                        end: "15/06/2023",
                        participants: 0,
                        status: "Agendada",
                      },
                      {
                        name: "Campeonato de Fãs",
                        type: "Competição",
                        start: "20/06/2023",
                        end: "30/06/2023",
                        participants: 0,
                        status: "Rascunho",
                      },
                      {
                        name: "Promoção Aniversário FURIA",
                        type: "Recompensas",
                        start: "10/07/2023",
                        end: "20/07/2023",
                        participants: 0,
                        status: "Agendada",
                      },
                    ].map((campaign, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{campaign.name}</div>
                        </TableCell>
                        <TableCell>{campaign.type}</TableCell>
                        <TableCell>{campaign.start}</TableCell>
                        <TableCell>{campaign.end}</TableCell>
                        <TableCell>{campaign.participants}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              campaign.status === "Ativa"
                                ? "border-green-500 text-green-500"
                                : campaign.status === "Agendada"
                                  ? "border-blue-500 text-blue-500"
                                  : campaign.status === "Concluída"
                                    ? "border-gray-500 text-gray-500"
                                    : "border-yellow-500 text-yellow-500"
                            }
                          >
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Detalhes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Criar Nova Campanha</CardTitle>
              <CardDescription>Configure uma nova campanha de engajamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Nome da Campanha</Label>
                  <Input id="campaign-name" placeholder="Ex: Desafio de Compartilhamento" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-type">Tipo</Label>
                  <Select>
                    <SelectTrigger id="campaign-type">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social</SelectItem>
                      <SelectItem value="event">Evento</SelectItem>
                      <SelectItem value="interaction">Interação</SelectItem>
                      <SelectItem value="competition">Competição</SelectItem>
                      <SelectItem value="rewards">Recompensas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-start">Data de Início</Label>
                  <Input id="campaign-start" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-end">Data de Término</Label>
                  <Input id="campaign-end" type="date" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="campaign-description">Descrição</Label>
                  <Textarea id="campaign-description" placeholder="Descreva a campanha em detalhes" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="campaign-rules">Regras e Condições</Label>
                  <Textarea id="campaign-rules" placeholder="Defina as regras da campanha" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-points">Pontos Oferecidos</Label>
                  <Input id="campaign-points" type="number" placeholder="Ex: 500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-target">Público-Alvo</Label>
                  <Select>
                    <SelectTrigger id="campaign-target">
                      <SelectValue placeholder="Selecione o público" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os Fãs</SelectItem>
                      <SelectItem value="new">Novos Usuários</SelectItem>
                      <SelectItem value="active">Usuários Ativos</SelectItem>
                      <SelectItem value="inactive">Usuários Inativos</SelectItem>
                      <SelectItem value="segment">Segmento Específico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Button className="bg-black hover:bg-gray-800">Criar Campanha</Button>
                <Button variant="outline">Salvar como Rascunho</Button>
                <Button variant="ghost">Cancelar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
