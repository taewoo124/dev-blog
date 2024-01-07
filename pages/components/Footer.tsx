import Link from "next/link";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-gray-light rounded p-8 mt-12">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <div className="flex sm:gap-30 gap-10">
          <div>
            <h1 className="mb-2">About</h1>
            <ul className="text-gray">
              <li>이름: 김 태우</li>
              <li>이메일: taewoo124@gmail.com</li>
              <li>전화번호: 010-4926-8338</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2">Projects</h2>
            <ul className="text-gray">
              <li>
                <Link target="blank" href="https://harmonyHub.site">
                  Harmony-Hub (개인 프로젝트)
                </Link>
              </li>
              <li>
                <Link
                  target="blank"
                  href="https://github.com/Common-LKP/reactree-frontend"
                >
                  Reactree (팀 / 3인 프로젝트)
                </Link>
              </li>
              <li>Comming Soon..</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <HeaderLink>
            <Link target="blank" href="https://www.github.com/taewoo124">
              <Image
                src="/github.svg"
                alt="GitHub_Image"
                width={35}
                height={35}
              />
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link target="blank" href="https://www.kimtw.dev">
              <Image
                src="/terminal.png"
                alt="Terminal_Image"
                width={41.5}
                height={41.5}
              />
            </Link>
          </HeaderLink>
          <HeaderLink>
            <Link
              target="blank"
              href="https://www.notion.so/Learning-Record-da39ff869c8c45b7a7ddcc1dbe2ebc63"
            >
              <Image
                src="/notion.png"
                alt="Terminal_Image"
                width={45}
                height={45}
              />
            </Link>
          </HeaderLink>
        </div>

        <div className="text-gray-light">
          <p>무작정 코드를 작성하지 않고</p>
          <p>이해하고 기록하는 것을 목표로 하는 블로그입니다.</p>
        </div>
        <p className="text-gray-light font-thin">©2023-</p>
      </div>
    </footer>
  );
}
