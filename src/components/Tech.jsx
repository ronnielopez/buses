import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}></p>
        <h2 className={styles.sectionHeadTextLight}></h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        <div className="min-h-screen flex justify-center items-center">
          <div className="">
            <div className="text-center font-semibold">
              <h1 className="text-5xl">
                <span className="text-blue-700 tracking-wide">Nuestro </span>
                <span>Planes</span>
              </h1>
              <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                Escoge el mejor plan que se adapte
                <br /> a tus necesidades.
              </p>
            </div>
            <div className="pt-24 flex flex-row">
              {/* <!-- Basic Card --> */}
              <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Basico</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-black align-top">$ </span>
                  <span className="text-3xl font-semibold text-black">10</span>
                  <span className="text-black font-medium">/ usuario</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Accesos a las rutas <span className="text-black">de Buses</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Tarjeta <span className="text-black">reutilizable</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      <span className="text-black">Promociones</span> segun tu uso
                    </span>
                  </p>

                  <a href="#" className="">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Escoger este plan</span>
                    </p>
                  </a>
                </div>
              </div>
              {/* <!-- StartUp Card --> */}
              <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                <h1 className="text-white font-semibold text-2xl">BUSES PRO</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">24</span>
                  <span className="text-gray-400 font-medium">/ usuario</span>
                </p>
                <hr className="mt-4 border-1 border-gray-600" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Crear tus propias rutas <span className="text-white">y ganar recompensas</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Monitoreo en <span className="text-white">tiempo real de los buses</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      <span className="text-white">Promociones</span> unicas
                    </span>
                  </p>

                  <a href="#" className="">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Escoger plan</span>
                    </p>
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                  </p>
                </div>
              </div>
              {/* <!-- Enterprise Card --> */}
              <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Empresarial</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold text-black">100</span>
                  <span className="text-gray-400 font-medium">/ usuario</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Agregar <span className="text-black">buses con rutas</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      Monitoreo en tiempo real <span className="text-black">y control de pasajeros</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">-</span>
                    <span className="pl-2">
                      <span className="text-black">Creaciones de </span> promociones
                    </span>
                  </p>

                  <a href="#" className="">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Escoger plan</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
