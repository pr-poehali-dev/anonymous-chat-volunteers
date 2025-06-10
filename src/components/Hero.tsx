import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onNavigate: (section: "chat" | "volunteers") => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-green-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Анонимная поддержка
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Безопасное пространство для общения и получения помощи от
            профессиональных волонтёров
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Анонимный чат
              </h3>
              <p className="text-gray-600">
                Поделитесь своими переживаниями в безопасной обстановке
              </p>
            </div>
            <Button
              onClick={() => onNavigate("chat")}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              size="lg"
            >
              Начать общение
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Волонтёры
              </h3>
              <p className="text-gray-600">
                Познакомьтесь с нашими специалистами по поддержке
              </p>
            </div>
            <Button
              onClick={() => onNavigate("volunteers")}
              variant="outline"
              className="w-full border-green-600 text-green-600 hover:bg-green-50"
              size="lg"
            >
              Посмотреть профили
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            🔒 Полная конфиденциальность • 💚 Профессиональная поддержка • 🌟
            Бесплатно
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
