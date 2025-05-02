import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Trophy, Star, Gift, Calendar, Share2, MessageSquare, Eye, Award, TrendingUp, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard do Fã</h1>
          <p className="text-muted-foreground">Acompanhe seu progresso e atividades na comunidade FURIA</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1 border-black px-3 py-1 text-black">
            <Star className="h-4 w-4 fill-black" /> Nível Prata
          </Badge>
          <Badge className="bg-black px-3 py-1">1250 Pontos</Badge>
        </div>
      </div>

      {/* User Profile Summary */}
      <div className="mb-8 grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2 text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=96&width=96&text=User"
                alt="User Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <CardTitle>João Silva</CardTitle>
            <CardDescription>@joaosilva</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Membro desde</span>
                <span className="text-sm">Jan 2023</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ranking</span>
                <span className="text-sm">#342 de 10,432</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Conquistas</span>
                <span className="text-sm">12/50</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Progresso do Nível</CardTitle>
            <CardDescription>1250/2000 pontos para o próximo nível</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Nível Prata</span>
                  <span>Nível Ouro</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Trophy className="mb-1 h-5 w-5 text-black" />
                  <span className="text-xl font-bold">12</span>
                  <span className="text-xs text-muted-foreground">Conquistas</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Activity className="mb-1 h-5 w-5 text-black" />
                  <span className="text-xl font-bold">87</span>
                  <span className="text-xs text-muted-foreground">Atividades</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Gift className="mb-1 h-5 w-5 text-black" />
                  <span className="text-xl font-bold">3</span>
                  <span className="text-xs text-muted-foreground">Recompensas</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">Próximas Conquistas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <span>Fã Dedicado</span>
                  </div>
                  <Progress value={80} className="h-2 w-24" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    <span>Influenciador</span>
                  </div>
                  <Progress value={45} className="h-2 w-24" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Tabs */}
      <Tabs defaultValue="activities" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="activities">Atividades</TabsTrigger>
          <TabsTrigger value="rewards">Recompensas</TabsTrigger>
          <TabsTrigger value="achievements">Conquistas</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
        </TabsList>

        <TabsContent value="activities" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Suas Atividades Recentes</CardTitle>
              <CardDescription>Histórico de interações com a FURIA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: Eye,
                    text: "Assistiu à transmissão ao vivo da partida FURIA vs. Team Liquid",
                    time: "Hoje, 14:30",
                    points: 50,
                  },
                  {
                    icon: MessageSquare,
                    text: "Comentou na publicação oficial sobre a nova contratação",
                    time: "Ontem, 18:45",
                    points: 25,
                  },
                  {
                    icon: Share2,
                    text: "Compartilhou o vídeo de highlights da última vitória",
                    time: "3 dias atrás",
                    points: 30,
                  },
                  {
                    icon: Calendar,
                    text: "Confirmou presença no evento de meet & greet",
                    time: "1 semana atrás",
                    points: 100,
                  },
                  { icon: Eye, text: "Assistiu 5 partidas consecutivas da FURIA", time: "2 semanas atrás", points: 75 },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <activity.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p>{activity.text}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge className="bg-black">+{activity.points} pts</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Ver Todas as Atividades
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recompensas Disponíveis</CardTitle>
              <CardDescription>Troque seus pontos por itens exclusivos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Camisa Oficial FURIA", points: 2000, image: "shirt" },
                  { title: "Meet & Greet Virtual", points: 1500, image: "meet" },
                  { title: "Ingresso para Evento", points: 3000, image: "ticket" },
                  { title: "Mousepad Exclusivo", points: 800, image: "mousepad" },
                  { title: "10% de Desconto na Loja", points: 500, image: "discount" },
                  { title: "Papel de Parede Exclusivo", points: 100, image: "wallpaper" },
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
                      <CardTitle className="text-base">{reward.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3" /> {reward.points} pontos
                        </Badge>
                        <Button size="sm" disabled={1250 < reward.points}>
                          {1250 >= reward.points ? "Resgatar" : "Pontos Insuficientes"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Suas Conquistas</CardTitle>
              <CardDescription>Conquistas desbloqueadas e em progresso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="mb-4 font-semibold">Conquistas Desbloqueadas (12/50)</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    { title: "Primeiro Login", description: "Bem-vindo à plataforma!", icon: Star },
                    { title: "Fã Iniciante", description: "Acumulou 1000 pontos", icon: Trophy },
                    { title: "Comentarista", description: "Fez 10 comentários", icon: MessageSquare },
                    { title: "Espectador", description: "Assistiu 5 partidas", icon: Eye },
                    { title: "Influenciador Júnior", description: "Compartilhou 5 posts", icon: Share2 },
                    { title: "Colecionador", description: "Resgatou 3 recompensas", icon: Gift },
                  ].map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg border p-4 text-center">
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
                        <achievement.icon className="h-6 w-6 text-black" />
                      </div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Próximas Conquistas</h3>
                <div className="space-y-3">
                  {[
                    { title: "Fã Dedicado", description: "Assista 10 partidas consecutivas", progress: 80 },
                    { title: "Influenciador", description: "Compartilhe 20 posts da FURIA", progress: 45 },
                    { title: "Colecionador Avançado", description: "Resgate 10 recompensas diferentes", progress: 30 },
                    {
                      title: "Comentarista Experiente",
                      description: "Faça 50 comentários em publicações",
                      progress: 60,
                    },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Trophy className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <span className="text-sm">{achievement.progress}%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <Progress value={achievement.progress} className="mt-2 h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Eventos da FURIA</CardTitle>
              <CardDescription>Próximos eventos e partidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "FURIA vs. Team Liquid", type: "Partida", date: "Hoje, 20:00", status: "Confirmado" },
                  { title: "FURIA vs. NAVI", type: "Partida", date: "Amanhã, 15:30", status: "Pendente" },
                  {
                    title: "Meet & Greet com Jogadores",
                    type: "Evento",
                    date: "15/05/2023, 18:00",
                    status: "Inscrições Abertas",
                  },
                  { title: "Lançamento da Nova Camisa", type: "Evento", date: "20/05/2023, 14:00", status: "Em Breve" },
                  { title: "FURIA vs. G2", type: "Partida", date: "22/05/2023, 19:00", status: "Pendente" },
                ].map((event, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                      {event.type === "Partida" ? <Activity className="h-6 w-6" /> : <Calendar className="h-6 w-6" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <Badge variant="outline" className="mt-1 sm:mt-0">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Button
                        variant={
                          event.status === "Confirmado"
                            ? "default"
                            : event.status === "Inscrições Abertas"
                              ? "default"
                              : "outline"
                        }
                        size="sm"
                        disabled={event.status === "Em Breve"}
                      >
                        {event.status === "Confirmado"
                          ? "Assistir"
                          : event.status === "Pendente"
                            ? "Lembrar"
                            : event.status === "Inscrições Abertas"
                              ? "Inscrever-se"
                              : "Em Breve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Ver Todos os Eventos
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Engagement Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Seu Perfil de Engajamento</CardTitle>
          <CardDescription>Análise de suas interações com a FURIA</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold">Tipos de Conteúdo Preferidos</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Partidas ao vivo</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Bastidores</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Entrevistas</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Highlights</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Frequência de Interação</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-base">Dias Mais Ativos</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span>Sábado</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Domingo</span>
                        <span className="text-sm">70%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Quarta</span>
                        <span className="text-sm">45%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-base">Horários Preferidos</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span>Noite</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tarde</span>
                        <span className="text-sm">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Manhã</span>
                        <span className="text-sm">5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Sugestões Personalizadas</h4>
                <ul className="space-y-2 rounded-lg border p-4">
                  <li className="flex items-start gap-2 text-sm">
                    <Star className="mt-0.5 h-4 w-4 text-black" />
                    <span>Participe dos eventos ao vivo aos sábados para maximizar seus pontos.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Star className="mt-0.5 h-4 w-4 text-black" />
                    <span>Compartilhe mais conteúdo de bastidores para desbloquear a conquista "Insider".</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
