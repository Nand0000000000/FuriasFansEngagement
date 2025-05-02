"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, Trophy, User, LogOut, Settings, Home, Gift, Users } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(pathname !== "/" && pathname !== "/login" && pathname !== "/register")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
              <span className="font-bold text-white">F</span>
            </div>
            <span className="hidden font-bold sm:inline-block">FURIA Fan Engagement</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {isLoggedIn ? (
            <>
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <Link
                  href="/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/rewards"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/rewards" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Recompensas
                </Link>
                <Link
                  href="/events"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/events" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Eventos
                </Link>
                <Link
                  href="/community"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/community" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Comunidade
                </Link>
              </nav>

              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                        3
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px]">
                    <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      {
                        title: "Você ganhou 50 pontos!",
                        description: "Por assistir à última partida da FURIA",
                        time: "Agora",
                      },
                      {
                        title: "Nova recompensa disponível",
                        description: "Mousepad exclusivo por apenas 800 pontos",
                        time: "2h atrás",
                      },
                      {
                        title: "Parabéns pela conquista!",
                        description: "Você desbloqueou 'Fã Dedicado'",
                        time: "1d atrás",
                      },
                    ].map((notification, index) => (
                      <DropdownMenuItem key={index} className="flex flex-col items-start p-3">
                        <div className="flex w-full justify-between">
                          <span className="font-medium">{notification.title}</span>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{notification.description}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center">Ver todas as notificações</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Trophy className="h-5 w-5" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                        2
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px]">
                    <DropdownMenuLabel>Conquistas Recentes</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      { title: "Fã Dedicado", description: "Assistiu 10 partidas consecutivas", time: "Hoje" },
                      { title: "Compartilhador", description: "Compartilhou 5 posts da FURIA", time: "Semana passada" },
                    ].map((achievement, index) => (
                      <DropdownMenuItem key={index} className="flex flex-col items-start p-3">
                        <div className="flex w-full justify-between">
                          <span className="font-medium">{achievement.title}</span>
                          <span className="text-xs text-muted-foreground">{achievement.time}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{achievement.description}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center">Ver todas as conquistas</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32&text=JS" alt="@user" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>Conquistas</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sair</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col space-y-4 py-4">
                    <Link href="/dashboard" className="flex items-center space-x-2">
                      <Home className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                    <Link href="/rewards" className="flex items-center space-x-2">
                      <Gift className="h-5 w-5" />
                      <span>Recompensas</span>
                    </Link>
                    <Link href="/events" className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Eventos</span>
                    </Link>
                    <Link href="/community" className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Comunidade</span>
                    </Link>
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Perfil</span>
                    </Link>
                    <Link href="/achievements" className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Conquistas</span>
                    </Link>
                    <Link href="/settings" className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>Configurações</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                      <LogOut className="h-5 w-5" />
                      <span>Sair</span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-black hover:bg-gray-800">Cadastre-se</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
