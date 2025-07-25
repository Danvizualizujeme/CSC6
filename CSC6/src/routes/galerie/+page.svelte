<script lang="ts">
  // Seznam obrázků – můžeš měnit za vlastní URL
  const images: string[] = [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
  ];

  let lightbox: boolean = false;
  let activeImg: string = "";

  function openLightbox(src: string): void {
    activeImg = src;
    lightbox = true;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox(): void {
    lightbox = false;
    activeImg = "";
    document.body.style.overflow = "";
  }
</script>

<!-- Hero sekce -->
<section class="relative h-[350px] md:h-[450px] w-full flex items-center justify-center">
  <img
    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80"
    alt="Galerie"
    class="absolute inset-0 w-full h-full object-cover brightness-50"
  />
  <h1 class="relative z-10 text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg uppercase tracking-wide">
    Galerie
  </h1>
</section>
