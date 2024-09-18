"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import { useState } from "react";

const ModalContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const footerContentElements = (
    <div className="flex gap-2">
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-center font-medium text-white hover:bg-opacity-90"
      >
        Button 1
      </Link>
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-center font-medium text-white hover:bg-opacity-90"
      >
        Button 2
      </Link>
    </div>
  );

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Modal" />

        <div className="flex justify-start">
          <button
            className="inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            onClick={openModal}
          >
            Click here to open Modal
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={"Add Items"}
            footerContent={footerContentElements}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sunt numquam reprehenderit voluptatem. Dignissimos
              esse totam, magni deserunt, distinctio necessitatibus, debitis
              atque nobis ratione itaque expedita qui vel minima harum
              perferendis eveniet dicta. Distinctio dolor ipsa dolorem
              recusandae, amet obcaecati, magni eveniet nobis culpa sint
              suscipit itaque, molestias deserunt nulla officia ipsum hic minima
              facere enim maxime illo molestiae tenetur maiores praesentium.
              Necessitatibus optio cumque maiores quasi! Adipisci animi aliquid
              officia, consequatur quis quos, molestias corrupti, nobis esse
              dolor saepe quo eligendi minima corporis similique ratione
              accusamus deserunt? Ipsa aspernatur, totam hic tempore iste
              dignissimos optio illo nemo ex doloremque reiciendis, perspiciatis
              nobis laborum quasi molestias ab inventore nam impedit sapiente,
              cum laboriosam? Aperiam, blanditiis! Temporibus velit obcaecati,
              molestiae odio ipsum maxime fugiat cupiditate perferendis illum.
              Non magnam dolorum iusto porro sunt eligendi quo assumenda! Modi,
              quibusdam. Aspernatur, est reiciendis vero corporis laudantium
              repudiandae nemo iure soluta at asperiores magni doloribus sed
              commodi quam deserunt nulla sint dicta adipisci! Voluptatibus
              mollitia similique, dolorem culpa ea laboriosam? Voluptatem
              laborum magni dicta? Sint id qui quisquam ex quos architecto
              voluptas doloribus eos. Dignissimos rem eius illo adipisci placeat
              laborum magni facilis obcaecati omnis iure porro et ipsum ducimus
              numquam, officia neque veniam quibusdam, unde, saepe voluptatibus
              modi similique nihil aliquid! Natus placeat accusantium qui odit,
              iusto delectus atque adipisci maiores quae? Eligendi itaque, magni
              animi non pariatur iure voluptatum sed officiis perspiciatis nobis
              numquam nulla dicta fugiat quo eveniet? Quia quae nulla repellat
              mollitia enim dolorem, rem sunt quis totam suscipit amet
              voluptatem nihil expedita. Facilis nam aperiam sunt rerum maiores
              maxime autem, rem reiciendis nemo quibusdam quod error voluptates
              omnis veniam nihil laboriosam sed earum quidem, incidunt eveniet
              perferendis? Blanditiis ad, beatae aliquid quisquam est magnam
              quae nam enim dolores recusandae non. Rerum corrupti facilis,
              fugiat libero tenetur porro, itaque, fuga placeat natus
              repellendus eum. Architecto ipsum amet eligendi provident porro
              minus quo, aut id tempora, quasi molestiae cum tenetur alias,
              exercitationem fugit reprehenderit numquam dolorum placeat minima
              odio ducimus? Quam neque quos illo dolor, aliquam natus dolorem
              repellendus labore cum beatae dolores nobis harum voluptas quas
              maxime eum dignissimos culpa magnam ad quis, provident similique
              rerum ut? Ad inventore ex reiciendis voluptate provident
              perferendis numquam delectus dolorem et? Ad officia quidem labore
              ipsam tenetur ratione sunt, quia laboriosam distinctio similique
              ab exercitationem velit porro iste nam ea nihil enim minima?
              Sapiente, consequatur. Aspernatur nobis mollitia consequuntur vero
              asperiores aperiam iure recusandae, laboriosam hic animi libero
              alias quidem. Possimus, labore aut quasi ullam obcaecati
              exercitationem, libero voluptas sequi provident consequatur,
              aliquid dolorum ipsam natus voluptate reiciendis nulla. Inventore
              officiis maxime id a omnis, quae voluptate, cumque delectus
              recusandae soluta incidunt ducimus assumenda itaque fugiat
              distinctio ea quam dignissimos aspernatur molestiae laudantium!
              Quasi repellat accusantium consequuntur quo soluta eligendi et
              omnis delectus! Magnam expedita delectus ut adipisci reprehenderit
              hic et totam laboriosam itaque eum asperiores necessitatibus id
              nam nemo vitae modi soluta iste, voluptatem officia eos incidunt
              quo dolorum ea temporibus. Quam ab atque ipsam vitae, quia aut
              voluptatum dolore doloremque rerum?
            </p>
          </Modal>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ModalContainer;
