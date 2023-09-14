import { useState, FormEvent } from 'react'
import './App.css'
import logoimg from "./assets/logo.png"

interface InfoProps{
    title: string;
    gasolina: string | number;
    alcool: string | number;
}
function App() {
    const [gasolinaInput, setgasolinaInput] = useState(1)
    const [alcoolInput, setalcoolInput] = useState(1)
    const [info, setInfo] = useState<InfoProps>()
    function calcular(event: FormEvent){
    event.preventDefault();

    let calculo = (alcoolInput/gasolinaInput)
        if(calculo <= 0.7){
            setInfo({
                title: "Compensa usar álcool!",
                gasolina: formatarMoeda(gasolinaInput),
                alcool: formatarMoeda(alcoolInput)
            })
        }else{
            setInfo({
                title: "Compensa usar Gasolina!",
                gasolina: formatarMoeda(gasolinaInput),
                alcool: formatarMoeda(alcoolInput)
            })
        }

    }
    function formatarMoeda(valor: number){
        let valorFormatado = valor.toLocaleString("pt-br",
            {
                style: "currency",
                currency: "BRL"
            })

        return valorFormatado;
    }

   return (
    <>
      <div>
    <main className="container">
        <img src={logoimg}
    alt="Logo da calculadora de gasolina vs álcool"/>
        <h1 className="title"> Qual a melhor opção? </h1>

        <form className="form" onSubmit={calcular}>
        <label>Álcool</label>
        <input
        className="input"
        type="number"
        placeholder="preço por litro"
        min="0.5"
        step="0.01"
        required
        value={alcoolInput}
        onChange={(e) => setalcoolInput(Number(e.target.value)) }
        />
        <label>Gasolina</label>
        <input
                className="input"
                type="number"
                placeholder="preço por litro"
                min="0.5"
                step="0.01"
                required
                value={gasolinaInput}
                onChange={(e)=> setgasolinaInput(Number(e.target.value))}
            />
        <input type="submit" value="Calcular" className="buttom"/>
        </form>

        {info && Object.keys(info).length > 0 && (
            <section className="Resultado">
                <h2 className="Result-title">
                    {info.title}
                </h2>

                <span>Álcool {info.alcool}</span>
                <span>Gasolina {info.gasolina}</span>
            </section>
        )}
    </main>
      </div>

    </>
  )
}

export default App
