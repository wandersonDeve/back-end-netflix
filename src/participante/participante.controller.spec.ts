import { Test, TestingModule } from '@nestjs/testing';
import { ParticipanteController } from './participante.controller';

describe('ParticipanteController', () => {
  let controller: ParticipanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipanteController],
    }).compile();

    controller = module.get<ParticipanteController>(ParticipanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
