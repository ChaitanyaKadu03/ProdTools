import { JSONTree } from "react-json-tree"
import { currentHttpDataAtom, httpTracerData } from "../../store/atoms"
import { useRecoilValue } from "recoil"

const Body = () => {
  const curtentHttpData = useRecoilValue(currentHttpDataAtom)

  return (
    <div className="w-full">
      <JSONTree data={curtentHttpData} theme={'monokai'} />
    </div>
  )
}

export default Body