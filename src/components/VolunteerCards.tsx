import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Volunteer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  languages: string[];
  available: boolean;
  avatar: string;
  description: string;
}

interface VolunteerCardsProps {
  onBack: () => void;
}

const VolunteerCards = ({ onBack }: VolunteerCardsProps) => {
  const volunteers: Volunteer[] = [
    {
      id: "1",
      name: "Анна С.",
      specialization: "Психологическая поддержка",
      experience: "5 лет",
      languages: ["Русский", "Английский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      description:
        "Специализируюсь на работе с тревожными расстройствами и стрессом",
    },
    {
      id: "2",
      name: "Михаил К.",
      specialization: "Кризисное консультирование",
      experience: "8 лет",
      languages: ["Русский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Помогаю людям в кризисных ситуациях, работаю с депрессией",
    },
    {
      id: "3",
      name: "Елена В.",
      specialization: "Семейное консультирование",
      experience: "6 лет",
      languages: ["Русский", "Немецкий"],
      available: false,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "Работаю с семейными проблемами и межличностными отношениями",
    },
    {
      id: "4",
      name: "Дмитрий Л.",
      specialization: "Подростковая психология",
      experience: "4 года",
      languages: ["Русский", "Английский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Специализируюсь на работе с подростками и молодёжью",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">
            Наши волонтёры
          </h1>
          <div className="text-sm text-gray-500">
            {volunteers.filter((v) => v.available).length} онлайн
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Профессиональная поддержка
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши волонтёры — квалифицированные специалисты, готовые помочь вам в
            трудную минуту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer) => (
            <Card
              key={volunteer.id}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      volunteer.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {volunteer.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {volunteer.specialization}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span>Опыт: {volunteer.experience}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {volunteer.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {volunteer.description}
                </p>
              </div>

              <Button
                className={`w-full ${
                  volunteer.available
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!volunteer.available}
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                {volunteer.available ? "Связаться" : "Не в сети"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="p-6 bg-purple-50 border-purple-200">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto mb-4 text-purple-600"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Безопасность и конфиденциальность
            </h3>
            <p className="text-sm text-gray-600">
              Все наши волонтёры прошли проверку и обучение. Ваши данные
              защищены и не передаются третьим лицам.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCards;
