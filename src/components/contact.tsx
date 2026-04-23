import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {

  const [, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ae3b5027-ae57-48ce-8105-19326f9a0f90");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section id="contact" className="relative py-20 px-6">
      <form className="max-w-screen-md mx-auto text-center" onSubmit={onSubmit}>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="my-4">
            Contacto
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cont&aacute;cteme
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Busco oportunidades para crecer como profesional en proyectos a tiempo completo, por contrato o como freelancer.
            </p>
        </div>
        <div className='space-y-8'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Su nombre</Label>
            <Input id='name' name="name" type='text' placeholder='Ingrese su nombre' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Su correo electr&oacute;nico</Label>
            <Input id='email' name="email" type='email' placeholder='Ingrese su correo electrónico' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>Mensaje</Label>
            <Textarea
              id='message'
              name="message"
              placeholder='Ingrese su mensaje'
              className='min-h-[120px] field-sizing-content'
            />
          </div>
          <Button type="submit" className='w-full cursor-pointer'>Enviar mensaje</Button>
        </div>
      </form>
    </section>
  )
}

export default Contact;