import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { MailCheck } from "lucide-react"
import { Spinner } from "./ui/spinner"
import { set, useForm, type SubmitHandler } from "react-hook-form"

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const wait = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const Contact = () => {

  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  })

  const [successfulSubmission, setSuccessfulSubmission] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    const dataToSend = {
      ...data,
      access_key: "ae3b5027-ae57-48ce-8105-19326f9a0f90"
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    const res = await response.json();

    // reset form
    reset();

    setSuccessfulSubmission(res.success ? true : false);
  };


  return (
    <section id="contact" className="relative py-20 px-6">
      <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="my-4">
            Contacto
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cont&aacute;cteme v&iacute;a correo electr&oacute;nico
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Si tiene alguna pregunta o desea discutir una posible colaboración, no dude en enviarme un mensaje. Estoy ansioso por escuchar de usted y explorar cómo podemos trabajar juntos.
          </p>
        </div>
        <div className='space-y-8'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Su nombre</Label>
            <Input
              {...register("name", {
                required: "El nombre es requerido.",
                validate: (value) => {
                  if (value.length < 3 || value.length > 16) {
                    return "El nombre debe tener entre 3 y 16 caracteres.";
                  }
                  return true;
                }
              })}
              type='text'
              placeholder='Debe tener entre 3 y 16 caracteres.'
            />
            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Su correo electr&oacute;nico</Label>
            <Input
              {...register("email", {
                required: "El correo electrónico es requerido.",
                pattern: {
                  value: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "El correo electrónico no es válido."
                }
              })}
              type='email'
              placeholder='nombre@dominio.com'
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>Mensaje</Label>
            <Textarea
              {...register("message", {
                required: "El mensaje es requerido.",
                validate: (value) => {
                  if (value.length < 10 || value.length > 500) {
                    return "El mensaje debe tener entre 10 y 500 caracteres.";
                  }
                  return true;
                }
              })}
              placeholder='Debe tener entre 10 y 500 caracteres.'
            />
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
            Enviar mensaje
            {isSubmitting && <Spinner data-icon="inline-start" />}
          </Button>
        </div>
      </form>

      <AlertDialog open={successfulSubmission} onOpenChange={setSuccessfulSubmission}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <MailCheck />
            </AlertDialogMedia>
            <AlertDialogTitle>Su mensaje ha sido enviado correctamente.</AlertDialogTitle>
            <AlertDialogDescription>
              Me comunicar&eacute; lo antes posible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className={"cursor-pointer"}>Cerrar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default Contact;