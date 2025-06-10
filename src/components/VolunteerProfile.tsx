import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  education: string;
  workingHours: string;
  successfulSessions: number;
  rating: number;
  specialties: string[];
  aboutMe: string;
  approach: string;
}

interface VolunteerProfileProps {
  volunteer: Volunteer | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (volunteer: Volunteer) => void;
}

const VolunteerProfile = ({
  volunteer,
  isOpen,
  onClose,
  onSelect,
}: VolunteerProfileProps) => {
  if (!volunteer) return null;

  const handleSelect = () => {
    onSelect(volunteer);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Анкета волонтёра
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Основная информация */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={volunteer.avatar}
                alt={volunteer.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                  volunteer.available ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {volunteer.name}
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                {volunteer.specialization}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  <span>{volunteer.rating}/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={16} />
                  <span>{volunteer.successfulSessions} сессий</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Образование и опыт */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Образование и опыт
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon
                  name="GraduationCap"
                  size={16}
                  className="text-blue-600"
                />
                <span className="text-gray-600">{volunteer.education}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-blue-600" />
                <span className="text-gray-600">
                  Опыт: {volunteer.experience}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} className="text-blue-600" />
                <span className="text-gray-600">{volunteer.workingHours}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Языки */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Языки общения
            </h3>
            <div className="flex flex-wrap gap-2">
              {volunteer.languages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Специализации */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Специализации
            </h3>
            <div className="flex flex-wrap gap-2">
              {volunteer.specialties.map((specialty) => (
                <Badge key={specialty} variant="outline">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* О себе */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">О себе</h3>
            <p className="text-gray-600 leading-relaxed">{volunteer.aboutMe}</p>
          </div>

          <Separator />

          {/* Подход к работе */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Подход к работе
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {volunteer.approach}
            </p>
          </div>

          {/* Кнопки действий */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSelect}
              className={`flex-1 ${
                volunteer.available
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!volunteer.available}
            >
              <Icon name="Check" size={16} className="mr-2" />
              {volunteer.available ? "Выбрать волонтёра" : "Не в сети"}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerProfile;
