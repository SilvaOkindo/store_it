import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden items-center justify-center w-1/2 lg:flex xl:w-2/5">
        <div className="max-h-[800px] max-w-[430px] flex flex-col justify-center gap-4">
          <Image src={"/assets/icons/logo-full.svg"} alt="logo" width={224} height={16} />
          <div className="text-white space-y-5">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your files
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center bg-white p-4 py-10 lg:items-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
            <Image src="/assets/icons/logo-full-brand.svg" alt="logo" width={224} height={82}/>
        </div>
        {children}
      </section>
 
    </div>
  );
}
