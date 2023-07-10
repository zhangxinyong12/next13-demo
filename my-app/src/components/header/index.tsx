import Link from "next/link"
import styles from "./index.module.scss"
export default function Hader() {
  return (
    <div className={`flex justify-center gap-10 ${styles.header} `}>
      <Link className="flex-4" href="/">
        首页
      </Link>
      <Link className="flex-4" href="/about">
        关于
      </Link>
      <Link className="flex-4" href="/list">
        列表
      </Link>
    </div>
  )
}
