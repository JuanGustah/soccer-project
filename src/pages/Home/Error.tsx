import Sad from "@/assets/images/sad_face.png";

export default function Error() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-8 bg-white h-96 w-96 py-4 px-8 rounded">
        <img src={Sad} alt="sad face" className="h-24" />
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-xl text-dark">Ops!</h2>
          <p className="font-regular text-xs text-dark text-center">
            Infelizmente não conseguimos buscar as partidas. Tente novamente
            mais tarde.
          </p>
        </div>
      </div>
    </div>
  );
}
