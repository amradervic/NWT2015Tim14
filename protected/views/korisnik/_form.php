<?php
/* @var $this KorisnikController */
/* @var $model Korisnik */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'korisnik-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'idKorisnik'); ?>
		<?php echo $form->textField($model,'idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'idKorisnik'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'korisnickoIme'); ?>
		<?php echo $form->textField($model,'korisnickoIme',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'korisnickoIme'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'sifra'); ?>
		<?php echo $form->textField($model,'sifra',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'sifra'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'email'); ?>
		<?php echo $form->textField($model,'email',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'email'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'tip'); ?>
		<?php echo $form->textField($model,'tip',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'tip'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'aktivan'); ?>
		<?php echo $form->textField($model,'aktivan'); ?>
		<?php echo $form->error($model,'aktivan'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'banovan'); ?>
		<?php echo $form->textField($model,'banovan'); ?>
		<?php echo $form->error($model,'banovan'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->