"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Facebook, Instagram, Twitter, Twitch, Youtube, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit form and redirect
      router.push("/dashboard")
    }
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Junte-se à Comunidade FURIA</CardTitle>
          <CardDescription>Crie sua conta para começar a ganhar pontos e recompensas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative mb-6">
              <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
              <ol className="relative z-10 flex justify-between">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center justify-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                        step >= i ? "bg-black text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informações Básicas</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nome</Label>
                    <Input id="first-name" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Sobrenome</Label>
                    <Input id="last-name" placeholder="Seu sobrenome" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="Crie uma senha forte" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirme sua senha" />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Eu concordo com os{" "}
                    <Link href="#" className="text-black hover:underline">
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link href="#" className="text-black hover:underline">
                      Política de Privacidade
                    </Link>
                  </Label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Perfil de Fã</h3>

                <div className="space-y-2">
                  <Label htmlFor="username">Nome de Usuário</Label>
                  <Input id="username" placeholder="Escolha um nome de usuário único" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birth-date">Data de Nascimento</Label>
                  <Input id="birth-date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Selecione seu estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                      <SelectItem value="pr">Paraná</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Há quanto tempo você acompanha a FURIA?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-year">Menos de 1 ano</SelectItem>
                      <SelectItem value="1-2-years">1-2 anos</SelectItem>
                      <SelectItem value="3-5-years">3-5 anos</SelectItem>
                      <SelectItem value="more-than-5">Mais de 5 anos</SelectItem>
                      <SelectItem value="day-one">Desde o início</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Quais modalidades você mais acompanha?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cs" />
                      <Label htmlFor="cs" className="text-sm">
                        CS:GO / CS2
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="valorant" />
                      <Label htmlFor="valorant" className="text-sm">
                        Valorant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lol" />
                      <Label htmlFor="lol" className="text-sm">
                        League of Legends
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other-games" />
                      <Label htmlFor="other-games" className="text-sm">
                        Outros jogos
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Redes Sociais</h3>
                <p className="text-sm text-muted-foreground">
                  Conecte suas redes sociais para ganhar pontos extras e personalizar sua experiência
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rounded-lg border p-3">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Facebook</h4>
                      <p className="text-xs text-muted-foreground">Conecte para compartilhar conquistas</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Instagram</h4>
                      <p className="text-xs text-muted-foreground">Compartilhe fotos de eventos</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-3">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Twitter</h4>
                      <p className="text-xs text-muted-foreground">Participe de discussões</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-3">
                    <Twitch className="h-5 w-5 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Twitch</h4>
                      <p className="text-xs text-muted-foreground">Acompanhe transmissões ao vivo</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-3">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">YouTube</h4>
                      <p className="text-xs text-muted-foreground">Assista a vídeos e highlights</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="notifications" defaultChecked />
                  <Label
                    htmlFor="notifications"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Desejo receber notificações sobre eventos, partidas e novidades da FURIA
                  </Label>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
            Voltar
          </Button>
          <Button onClick={handleNextStep} className="bg-black hover:bg-gray-800">
            {step < 3 ? "Próximo" : "Concluir Cadastro"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
