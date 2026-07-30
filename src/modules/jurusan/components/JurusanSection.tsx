import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { jurusanData } from "../data";

function JurusanItemCard({
  item,
  index,
}: {
  item: (typeof jurusanData)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="jurusan-section-item"
      data-reverse={isEven || undefined}
    >
      <div className="jurusan-section-image-wrap">
        <motion.img
          src={item.image}
          alt={`Foto ${item.name}`}
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="jurusan-section-image"
        />
      </div>

      <div className="jurusan-section-text">
        <span className="jurusan-section-code">
          {item.code}
        </span>

        <h3 className="jurusan-section-name">
          {item.name}
        </h3>

        {item.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="jurusan-section-paragraph">
            {paragraph}
          </p>
        ))}

        <div className="jurusan-section-cta-wrap">
          <Link
            to={`/jurusan/${item.slug}`}
            className="jurusan-section-cta"
          >
            Pelajari Lebih Lanjut
            <ArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function JurusanSection() {
  return (
    <section className="jurusan-section">
      <div className="jurusan-section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="jurusan-section-heading"
        >
          Belajar Apa Aja di Yadika
        </motion.h2>

        {jurusanData.map((item, index) => (
          <JurusanItemCard key={item.code} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default JurusanSection;
